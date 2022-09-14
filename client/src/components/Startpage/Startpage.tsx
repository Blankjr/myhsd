import '../../styles/Startpage/startpage.scss'
import StartpageItem from './StartpageItem'
import React from 'react'

interface Props {
  currentSemester: string
}
const Startpage: React.FC<Props> = ({ currentSemester }) => {
  return (
    <div className="startpage" data-testid="homepage">
      <div className="head-logo">
        <div className="col-12 d-flex justify-content-center">
          <img
            className="position-fixed mt-4"
            src="/img/HSD.svg"
            alt="MyHSDLogo"
          ></img>
        </div>
      </div>

      <div className="side-text">{currentSemester}</div>

      <div className="background rounded-top position-relative">
        <div style={{ width: '100%', height: 240 }}>
          <img
            src="img/hsd_img.webp"
            className="object-fit-cover header-img"
            alt="Foto_HSD"
          />
        </div>
        <div className="divider"></div>
        <div className="col-12">
          <div className="row content">
            <div className="col-12 col-lg-6 mb-3">
              <div className="row">
                <p className="heading">Pläne</p>
                <a href="/mensaplan">
                  Mensaplan <i className="bi bi-chevron-right right"></i>
                </a>
                <a href="/klausurplan">
                  Klausurplan <i className="bi bi-chevron-right right"></i>
                </a>
                <a href="/raumplan">
                  Raumplan <i className="bi bi-chevron-right right"></i>
                </a>
              </div>
            </div>

            <div className="col-12 col-lg-6 mb-3">
              <div className="row">
                <p className="heading">Semester</p>
                <StartpageItem name="Vorlesungszeitraum" />
                <StartpageItem name="Prüfungsanmeldung" />
              </div>
            </div>

            <div className="col-12 col-lg-6 mb-3">
              <div className="row">
                <p className="heading">Öffnungszeiten</p>
                <StartpageItem name="Mensa" />
                <StartpageItem name="Bibliothek" />
              </div>
            </div>

            <div className="col-12 col-lg-6 mb-3">
              <div className="row">
                <p className="heading">Links</p>
                <a href="https://fachschaftmedien.de/">
                  Fachschaft <i className="bi bi-link-45deg right"></i>
                </a>
                <a href="https://medien.hs-duesseldorf.de/studium/erstsemesterinfos">
                  Erstsemesterinfo <i className="bi bi-link-45deg right"></i>
                </a>
              </div>
            </div>
            <div className="col-12 mb-5">
              <div className="row">
                <p className="heading">Hinweis</p>
                <p className="small">
                  Dies ist keine offizielle Anwendung der HSD Düsseldorf.
                  <br />
                  Alle hier veröffentlichten Termine und Informationen sind ohne
                  Gewähr.
                  <br />
                  <br />
                  Bitte regelmäßig die Informationen über die offiziellen Kanäle
                  prüfen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Startpage
