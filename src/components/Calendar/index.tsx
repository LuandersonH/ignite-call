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

export function Calendar() {
  const weekdays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Dezembro <span>2025</span>
        </CalendarTitle>
        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
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
          </tbody>
        </CalendarBody>
      </CalendarHeader>
    </CalendarContainer>
  )
}
