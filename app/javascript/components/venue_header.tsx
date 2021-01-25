import * as React from "react"

interface VenueHeaderProps {
  seatsInRow: number
  changeHandler: (event: React.SyntheticEvent) => void
}

const options = seatsInRow => {
  const arrayOfNumbers = Array.from(Array(seatsInRow).keys())
  return arrayOfNumbers.map(i => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))
}

export const VenueHeader = (props: VenueHeaderProps) => {
  return (
    <div>
      <span>How many tickets would you like?</span>
      <span className="select">
        <select onChange={props.changeHandler}>
          {options(props.seatsInRow)}
        </select>
      </span>
    </div>
  )
}

export default VenueHeader
