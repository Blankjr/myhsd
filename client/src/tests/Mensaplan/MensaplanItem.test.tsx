import { render, screen, cleanup } from '@testing-library/react'
import MensaplanItem from '../../components/Mensaplan/MensaplanItem'
import { MensaMenu } from '../../components/Mensaplan/Mensaplan'

afterEach(cleanup)

// Mockup data
const price1 = {
  name: 'Studierende',
  price: '1,30€',
}
const price2 = {
  name: 'Bedienstete',
  price: '3,30€',
}
const price3 = {
  name: 'Gäste',
  price: '3,30€',
}

const today = new Date()
const dd = today.getDate()
const mm = today.getMonth()
const yyyy = today.getFullYear()

const todayAsString = `${dd}.${mm}.${yyyy}`

const testData: MensaMenu[] = [
  {
    menuTitle: 'Geflügelfrikadelle',
    subTitle: ['Rahmsauce'],
    price: [price1, price2, price3],
    date: todayAsString,
    imgSrc: 'https://www3.hhu.de/stw-d/xml-export/img/900069.jpg',
    markings: '(22,23,20a)(19,21,22,15,20a,20c)',
  },
  {
    menuTitle: 'Falafel, Kichererbsen-Bällchen',
    subTitle: ['Kräuterquark-Dip'],
    price: [price1, price2, price3],
    date: todayAsString,
    imgSrc: 'https://www3.hhu.de/stw-d/xml-export/img/900079.jpg',
    markings: '[V] (22,20a)  (19,15)',
  },
  {
    menuTitle: 'Verschiedene Beilagenvariationen',
    subTitle: [],
    price: [price1, price2, price3],
    date: todayAsString,
    imgSrc: 'https://www3.hhu.de/stw-d/xml-export/img/900089.jpg',
    markings: '(Z)',
  },
]

test('contains food title', () => {
  render(
    <MensaplanItem
      key={0}
      menuTitle={testData[0].menuTitle}
      price={testData[0].price}
      imgSrc={testData[0].imgSrc}
      subTitle={[]}
    />
  )
  const linkElement = screen.getByText(/Geflügelfrikadelle/)
  expect(linkElement).toBeInTheDocument()
})

test('contains price', () => {
  render(
    <MensaplanItem
      key={0}
      menuTitle={testData[0].menuTitle}
      price={testData[0].price}
      imgSrc={testData[0].imgSrc}
      subTitle={[]}
    />
  )
  const linkElement = screen.getByText(/1,30€/)
  expect(linkElement).toBeInTheDocument()
})

it('uses correct img src', async () => {
  const { getByAltText } = await render(
    <MensaplanItem
      key={0}
      menuTitle={testData[0].menuTitle}
      price={testData[0].price}
      imgSrc={testData[0].imgSrc}
      subTitle={[]}
    />
  )
  const image = getByAltText('menuPicture')
  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute('src', testData[0].imgSrc)
})
