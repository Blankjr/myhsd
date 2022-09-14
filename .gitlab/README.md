# Gitlab Runner

Die Gitlab Pipeline des Projekts benötigt den `dind` (Docker in Docker) Service. Dadurch wird ein Gitlab Runner mit `privileged` Rechten benötigt. Ein eigener Gitlab Runner, der z.B. auf einem Raspberry Pi betrieben wird, reicht mit seiner Rechenkapazität nicht aus. Alternativ kann man den Gitlab Runner auch innerhalb des Kubenertes Clusters betreiben, man muss dafür nur das Helm-Chart `./values.yaml` anwenden.:

Ausführliche Dokumentation: [https://docs.gitlab.com/runner/install/kubernetes.html](https://docs.gitlab.com/runner/install/kubernetes.html)

```shell
helm repo add gitlab https://charts.gitlab.io

# For Helm 2
helm init

# For Helm 2
helm install --namespace <NAMESPACE> --name gitlab-runner -f values.yaml gitlab/gitlab-runner

# For Helm 3
helm install --namespace <NAMESPACE> gitlab-runner -f values.yaml gitlab/gitlab-runner
```

Der Dateipfad der `values.yaml` muss dabei eventuell angepasst werden, genauso wie der Runner Registration Token.