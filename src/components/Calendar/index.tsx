import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'
import { getWeekDays } from '@/utils/get-week-days'
import { useMemo, useState } from 'react'
import dayjs from 'dayjs'
import { log } from 'console'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().tz('America/Sao_Paulo').startOf('month')
  })

  console.log(`initial currentDate: ${currentDate}`)

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth() {
    const previousNextDate = currentDate.add(1, 'month')

    setCurrentDate(previousNextDate)
  }

  const calendarWeeks = useMemo(() => {
    console.log('1. Iniciando cálculo de calendarWeeks...')
    console.log('2. currentDate:', currentDate)

    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      const day = currentDate.set('date', i + 1)
      console.log('3. Dia do mês atual:', day)
      return day
    })

    const firstWeekDay = currentDate.get('day')
    console.log('4. Dia da semana do primeiro dia do mês:', firstWeekDay)

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        const prevDay = currentDate.subtract(i + 1, 'day')
        console.log('5. Dia do mês anterior:', prevDay)
        return prevDay
      })
      .reverse()

    console.log(
      '6. Dias do mês anterior (array):',
      previousMonthFillArray.map((d) => d.toDate()),
    )
    console.log(
      '7. Dias do mês atual (array):',
      daysInMonthArray.map((d) => d),
    )

    const fullArray = [...previousMonthFillArray, ...daysInMonthArray]
    console.log('8. Total de dias no calendário:', fullArray.length)

    return fullArray
  }, [currentDate])

  console.log(`9. CalendarWeekDays: ${calendarWeeks}`)

  const weekdays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>
        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <thead>
          <tr>
            {weekdays.map((weekday) => {
              return <th key={weekday}>{weekday}.</th>
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay>2</CalendarDay>
            </td>
            <td>
              <CalendarDay>3</CalendarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarDay>4</CalendarDay>
            </td>
            <td>
              <CalendarDay>5</CalendarDay>
            </td>
            <td>
              <CalendarDay>6</CalendarDay>
            </td>
            <td>
              <CalendarDay>7</CalendarDay>
            </td>
            <td>
              <CalendarDay>8</CalendarDay>
            </td>
            <td>
              <CalendarDay>9</CalendarDay>
            </td>
            <td>
              <CalendarDay>10</CalendarDay>
            </td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
