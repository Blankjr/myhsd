![Cover](./images/pwa.png)

# Progressive Web App

**myHSD**, eine React-basierte Progressive Web-App mit einem nestjs API-Server, die auf einem Kubernetes Cluster deployt werden kann.

Damit die Anwendung als Progressive Web-App voll installierfähig ist, muss eine Domain verknüpft werden und eine Verbindung über HTTPS möglich sein.

## How to Development

Zum lokalen Entwickeln und Testen der Anwendung gibt es verschiedene Möglichkeiten: Zwei containerisierte Varianten und eine komplett lokale. Die beiden Container-Versionen unterscheiden sich darin, dass die erste für das normale Entwickeln gedacht ist und die zweite das spätere Deployment und die Pipeline in der Produktiv-Umgebung simuliert.

Es gibt eine Umgebungsvariable in der Datei `./client/.env`, die die URL des API-Servers angibt (verfügbar im Code über `process.env.REACT_APP_API_URL`). Die gleiche Variable wird in der Datei `.client/.env.development` mit der Development-URL überschrieben.

### Alternative 1 (Lokal)

1. node.js und npm müssen installiert sein
2. Terminal öffnen und in das `./client` oder `./server` Verzeichnis wechseln
3. Den Befehl `npm install` oder `npm i` ausführen um Abhängigkeiten zu installieren
4. Den Befehl `npm run start` ausführen, um den Development-Server zu starten
5. Die Anwendung ist nun unter `http://localhost:3000` erreichbar
6. Beim Speichern einer Programm-Datei werden die Änderungen automatisch übernommen
7. Im Terminal `ctrl + c` stoppt den Development-Server

Dabei ergeben sich allerdings folgende Grenzen: Client und Server müssen getrennt voneinander gestartet werden und beide Development-Server hören auf Port 3000. Um zum Beispiel nur den Client Development-Server zu starten und zu benutzen, bietet es sich an, die Umgebungsvariable `REACT_APP_API_URL` in einer neuen Datei `./client/.env.development.local` mit der API-Produktiv-URL zu überschreiben. `.local`-Dateien werden dabei von git ignoriert.

### Alternative 2 (Containerisiert, empfohlen)

1. Docker muss installiert und die Docker Engine gestartet sein
2. Terminal öffnen und in das root-Verzeichnis des Projekts wechseln
3. Den Befehl `docker compose up -d` ausführen, um zwei Docker Container mit den Development-Servern (Client und Server) zu starten
4. Der Client ist unter `http://localhost:3333` und der API-Server unter `http://localhost:5000` erreichbar. Die Umgebungsvariable `REACT_APP_API_URL` wird automatisch angepasst (Datei `./client/.env.development`)
5. Beim Speichern einer Programm-Datei werden die Änderungen automatisch übernommen
6. Um die Container zu beenden den Befehl `docker compose down -v` ausführen
7. Falls sich zwischenzeitlich die node-Abhängigkeiten geändert haben muss in Schritt 3 der Befehl wie folgt angepasst werden: `docker compose up --force-recreate --build`

### Alternative 3 (Containerisiert, Lokaler Test der Pipeline/Deployment)

1. Docker muss installiert und die Docker Engine gestartet sein
2. Terminal öffnen und in das root-Verzeichnis des Projekts wechseln
3. Den Befehl `docker compose -f docker-compose.test.yml up -d` ausführen, um beide Anwendungsteile wie in der Pipeline in separaten Docker-Containern zu kompilieren und danach mit den Build-Artefakten zwei weitere Docker-Container zu erstellen, die genauso wie die Deployment-Images konfiguriert sind
4. Der Client ist unter `http://localhost:3333` und der API-Server unter `http://localhost:5000` erreichbar. Die Umgebungsvariable `REACT_APP_API_URL` wird automatisch angepasst (Datei `./client/.env.development`)
5. Beim Speichern einer Programm-Datei werden die Änderungen **nicht** übernommen
6. Um die Container zu beenden den Befehl `docker compose down -v` ausführen
7. 7. Falls sich zwischenzeitlich die node-Abhängigkeiten geändert haben muss in Schritt 3 der Befehl wie folgt angepasst werden: `docker compose up --force-recreate --build`

Die Variante ist nicht zum normalen Entwickeln gedacht, sondern nur zum lokalen Überprüfen, ob die Deployment-Images funktionsfähig sind.

### Code Style

Es gibt sowohl im Client-, als auch im Server-Teil einen Linter zur Erhöhung der Codequalität und Prettier zur Formatierung. Der Linter ESLint kümmert sich darum, ob z.B. Datentypen angegeben wurden, Importe genutzt werden, usw. und Prettier kümmert sich um Zeichensetzung, Leerzeichen, Semikolons, usw., also der allgemeinen Formatierung.

Die Regeln des Code-Styles werden in der Datei `./client/.eslintrc.json` bzw. `./server/.eslintrc.js` definiert, außerdem in `./client/.prettierrc.json` und `./server/.prettierrc`.

Wenn node.js und npm installiert sind, bietet es sich an, etwaige Verstöße gegen die Code-Konventionen automatisiert mittels `npm run lint:fix` zur beheben (`npm run lint` zu reinen Überprüfung) und `npm run format` (bzw. `npm run style:check` zur Überprüfung). Es werden außerdem git Hooks benutzt, um vor einem Commit automatisiert die gleichen Befehle auszuführen. Dafür muss vorher einmalig der Befehl `npm install` oder `npm i` ausgeführt werden.

## How to Deployment

### Pipeline

Das Projekt ist so eingerichtet, dass das Deployment vollautomatisch über eine Gitlab Pipeline funktioniert. Wenn ein Gitlab Runner (mit aktiviertem Docker in Docker Service) für das Projekt verfügbar ist und die erstmalige Einrichtung (siehe unten) vorgenommen wurde, ist der Ablauf folgender:

1. Bei jedem Merge Request wird je nach Änderungen der Client- und/oder der Server-Teil der Anwendung kompiliert, Code Konventionen geprüft und die Tests der Testsuiten ausgeführt. Die Testabdeckung wird ausgelesen und in Gitlab importiert, außerdem wird ein Test-Report erstellt und in der Merge Request Difference Ansicht ist pro Codezeile die Testabdeckung sichtbar. Ein Merge sollte nur bei einer erfolgreichen Pipeline durchgeführt werden.
2. Der `develop`-Branch sollte den aktuellen und funktionsfähigen Entwicklungsstand darstellen und ist das Merge-Ziel der Feature-Branches. In der `.gitlab-ci.yml` sind außerdem Jobs zum Deployment in einer Staging-Umgebung zum Testen vorkonfiguriert und aktuell auskommentiert mangels Möglichkeit der Umsetzung.
3. Nach einem Merge in den `main`-Branch laufen die gleichen Jobs wie bei einem Merge-Request, zusätzlich wird ein Docker-Image, in dem sich die Build-Artefakte der Anwendung befinden in einer Webserver Umgebung befinden, erzeugt und in die definierte Docker-Registry hochgeladen (mit Commit-Short-SHA als Tag). Anschließend wird das Kubernetes Deployment neu konfiguriert, sodass das neue Image verwendet wird. Damit werden die Änderungen in der Produktiv-Umgebung verfügbar und das automatisierte Deployment ist abgeschlossen.

### Erstmalige Einrichtung

Um das Deployment von einem Cloud-Anbieter zum anderen zu verschieben, sind nur 5 Schritte notwendig (Registry einrichten, Secret erzeugen, Agent verbinden und Variablen ändern, Kubernetes konfigurieren).

Statt einer Third-Party Container Registry, wie z.B. Oracle Cloud, kann auch die Gitlab eigene Registry verwendet werden, die folgende Anleitung bezieht sich darauf.

#### 0. Einrichtung Kubernetes Cluster

Zuallererst muss ein Kubernetes Cluster eingerichtet werden, allerdings noch ohne weitergehende Konfiguration (Kein Deployment oder Service o.ä.).

#### 1. Gitlab Registry einrichten

Alternativ kann auch jede andere private Image Registry genutzt werden.

[Gitlab Dokumentation](https://docs.gitlab.com/ee/user/packages/container_registry/)

Der Name der Container in der Registry entspricht dabei folgendem Muster: `<registry URL>/<namespace>/<project>/<image>`. In der Pipeline kann ein normaler Benutzername und Passwort für Gitlab verwendet werden, für Kubernetes muss allerdings ein Token verwendet werden.

#### 2. Secret in Kubernetes erzeugen

```shell
kubectl create secret docker-registry <Name> --docker-server=registry.gitlab.com --docker-username=<Username> --docker-password=<Token> --docker-email=<Email>
```
wobei `<Name>` der Name des Secrets, `<Username>` ein Gitlab Username eines Users mit Pull-Rechten in der Registry ist, und `<Token>` der Token des Users und `<Email>`die E-Mail-Adresse des Users ist.

#### 3. Gitlab Agent in Kubernetes registrieren

[Gitlab Dokumentation](https://docs.gitlab.com/ee/user/clusters/agent/)

Der Agent muss einmalig in dem Kubernetes Cluster registriert werden, dafür müssen nur die Kommandozeilen-Befehle in Gitlab kopiert und in Kubernetes ausgeführt werden.

#### 4. CI/CD Variablen ändern

Im Gitlab Projekt unter `Settings > CI/CD > Variables` müssen als letzter Schritt die Variablen angepasst werden:

- `DOCKER_REGISTRY` URL der Docker Registry, z.B. `registry.gitlab.com`
- `REGISTRY_NAMESPACE` Namespace innerhalb der Registry, z.B. `username/applicationname`
- `DOCKER_USER` Siehe Secret in Kubernetes erzeugen
- `DOCKER_PASSWORD` Passwort zum `DOCKER_USER`, Token ist aber auch möglich
- `KUBE_CONTEXT` Name des Gitlab Agents, z.B. `username/applicationname:gitlab`
- `CLIENT_URL` URL des Clients
- `API_URL` URL der API

#### 5. Kubernetes konfigurieren

Vor der finalen Konfiguration muss noch der Kubernetes Metrics Server installiert werden. Dieser ist nötig, damit Kubernetes die Anzahl der Pods horizontal und automatisch skalieren kann. Dafür muss nur folgender Befehl ausgeführt werden:

```shell
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

Zum Schluss müssen einmalig die Deployments/Services in Kubernetes konfiguriert werden. Dafür muss die Datei `deployment.yaml`, die sich im root-Verzeichnis des Projekts befindet, auf das Kubernetes Cluster kopiert werden (Verlinkung über HTTP ist allerdings auch möglich) und folgender Befehl ausgeführt werden:

```shell
kubectl apply -f <Datei-Pfad bzw. Datei-Name oder URI>
```

z.B.:
```shell
kubectl apply -f deployment.yaml
```

Falls HTTPS verwendet werden soll (ohne die Verwendung von HTTPS muss die Konfiguration in der `deployment.yaml` und die `.env`-Variablen angepasst werden), muss das Gleiche mit der `letsencrypt.yaml` wiederholt werden.

#### (6. Gitlab Runner einrichten)

Optional kann ein eigener Gitlab Runner auch auf dem Kubernetes Cluster betrieben werden. Dafür die Anleitung im `./.gitlab`-Ordner befolgen.
