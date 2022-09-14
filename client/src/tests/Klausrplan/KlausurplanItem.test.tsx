import { render, screen, cleanup } from '@testing-library/react'
import KlausurplanItem from '../../components/Klausurplan/KlausurplanItem'
import { KlausurplanItemProps } from '../../components/Klausurplan/KlausurplanItem'

afterEach(cleanup)

const testData: KlausurplanItemProps[] = [
  {
    date: '13.07.2022',
    subjectTitle: 'IT-Sicherheit',
    firstExaminer: 'Schmidt',
    secondExaminer: 'Dahm',
    room: 'AM',
    duration: '90',
    daysLeft: '4',
    startTime: '13:00',
    bookmark: false,
    handleBookmark: () => {
      console.log('test')
    },
    id: 1,
    course: 'bmi18',
  },
  {
    date: '24.08.2022',
    subjectTitle: 'Mathematik 2',
    firstExaminer: 'Dörries',
    secondExaminer: 'Schmidt',
    room: 'AM',
    duration: '90',
    daysLeft: '8',
    startTime: '10:00',
    bookmark: false,
    handleBookmark: () => {
      console.log('test')
    },
    id: 2,
    course: 'bmi18',
  },
  {
    date: '13.07.2022',
    subjectTitle: 'Informatikprojekt 1',
    firstExaminer: 'Schmidt',
    secondExaminer: '',
    room: 'n.V',
    duration: 'Referat',
    daysLeft: '-',
    startTime: 'n.V',
    bookmark: false,
    handleBookmark: () => {
      console.log('test')
    },
    id: 3,
    course: 'bmi18',
    title: 'Hacking Challenges',
  },
]
test('contains date', () => {
  render(
    <KlausurplanItem
      date={testData[0].date}
      subjectTitle={testData[0].subjectTitle}
      firstExaminer={testData[0].firstExaminer}
      room={testData[0].room}
      duration={testData[0].duration}
      startTime={testData[0].startTime}
      secondExaminer={testData[0].secondExaminer}
      daysLeft={testData[0].daysLeft}
      bookmark={testData[0].bookmark}
      id={testData[0].id}
      handleBookmark={testData[0].handleBookmark}
      course={testData[0].course}
    />
  )
  const linkElement = screen.getByText(/13.07.2022/)
  expect(linkElement).toBeInTheDocument()
})
test('contains subjecTitle', () => {
  render(
    <KlausurplanItem
      date={testData[0].date}
      subjectTitle={testData[0].subjectTitle}
      firstExaminer={testData[0].firstExaminer}
      room={testData[0].room}
      duration={testData[0].duration}
      startTime={testData[0].startTime}
      secondExaminer={testData[0].secondExaminer}
      daysLeft={testData[0].daysLeft}
      bookmark={testData[0].bookmark}
      id={testData[0].id}
      handleBookmark={testData[0].handleBookmark}
      course={testData[0].course}
    />
  )
  const linkElement = screen.getByText(/IT-Sicherheit/)
  expect(linkElement).toBeInTheDocument()
})
test('contains examiners', () => {
  render(
    <KlausurplanItem
      date={testData[0].date}
      subjectTitle={testData[0].subjectTitle}
      firstExaminer={testData[0].firstExaminer}
      room={testData[0].room}
      duration={testData[0].duration}
      startTime={testData[0].startTime}
      secondExaminer={testData[0].secondExaminer}
      daysLeft={testData[0].daysLeft}
      bookmark={testData[0].bookmark}
      id={testData[0].id}
      handleBookmark={testData[0].handleBookmark}
      course={testData[0].course}
    />
  )
  const linkElement = screen.getByText(/Schmidt/)
  const linkElement2 = screen.getByText(/Dahm/)
  expect(linkElement).toBeInTheDocument()
  expect(linkElement2).toBeInTheDocument()
})
test('contains room,duration,time', () => {
  render(
    <KlausurplanItem
      date={testData[1].date}
      subjectTitle={testData[1].subjectTitle}
      firstExaminer={testData[1].firstExaminer}
      room={testData[1].room}
      duration={testData[1].duration}
      startTime={testData[1].startTime}
      secondExaminer={testData[1].secondExaminer}
      daysLeft={testData[1].daysLeft}
      bookmark={testData[1].bookmark}
      id={testData[1].id}
      handleBookmark={testData[1].handleBookmark}
      course={testData[1].course}
    />
  )
  const linkElement = screen.getByText(/AM/)
  const linkElement2 = screen.getByText(/90/)
  const linkElement3 = screen.getByText(/10:00/)
  expect(linkElement).toBeInTheDocument()
  expect(linkElement2).toBeInTheDocument()
  expect(linkElement3).toBeInTheDocument()
})
test('contains title', () => {
  render(
    <KlausurplanItem
      date={testData[2].date}
      subjectTitle={testData[2].subjectTitle}
      firstExaminer={testData[2].firstExaminer}
      room={testData[2].room}
      duration={testData[1].duration}
      startTime={testData[2].startTime}
      secondExaminer={testData[2].secondExaminer}
      daysLeft={testData[2].daysLeft}
      title={testData[2].title}
      bookmark={testData[2].bookmark}
      id={testData[2].id}
      handleBookmark={testData[2].handleBookmark}
      course={testData[2].course}
    />
  )
  const linkElement = screen.getByText(/Hacking Challenges/)
  expect(linkElement).toBeInTheDocument()
})
