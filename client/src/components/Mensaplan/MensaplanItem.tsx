import React, { FC } from 'react'

export interface price {
  name: string
  price: string
}
interface MensaplanItemProps {
  menuTitle: string
  subTitle: string[]
  price: price[]
  imgSrc: string
  markings?: string
  date?: string
}

const MensaplanItem: FC<MensaplanItemProps> = ({
  menuTitle,
  subTitle,
  price,
  imgSrc,
  markings,
}) => {
  return (
    <div className="card mx-2 mb-7" style={{ width: 300 }}>
      <img src={imgSrc} className="card-img-top" alt="menuPicture" />

      <div className="row mt-2 mx-0">
        <div className="col-12">
          <div className=" text-white fs-6">{menuTitle}</div>
        </div>
        {subTitle.map((title: string) => (
          <div key={title} className="col-12">
            <div className="text-white fs-7">{title}</div>
          </div>
        ))}

        <div className="col-12 my-2">
          <div className="bg-white" style={{ width: 180, height: 1 }}></div>
        </div>
        <div className="col-12">
          <div className="my-hsd-font text-white fs-7">Kennzeichnungen:</div>
        </div>
        <div className="col-12">
          <div className="text-white-50 fs-7">{markings}</div>
        </div>

        <div className="col-12 mt-2">
          <div className="row mt-4 mb-2 mx-4">
            <div className="col-10">
              <div className="row">
                <div className="col-8 d-flex justify-content-end text-white my-hsd-font fs-7 align-items-center">
                  {price[0].name}
                </div>
                <div className="col-4 d-flex justify-content-center text-white my-hsd-font fw-bold fs-4">
                  {price[0].price}
                </div>
              </div>

              <div className="row">
                <div className="col-8 d-flex justify-content-end text-white my-hsd-font fs-7 align-items-center">
                  {price[1].name}
                </div>
                <div className="col-4 d-flex justify-content-center text-white my-hsd-font fw-bold fs-4">
                  {price[1].price}
                </div>
              </div>
            </div>

            <div className="col-2 position-relative">
              <div className="fs-0 position-absolute top-50 start-0 translate-middle-y">
                €
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MensaplanItem
