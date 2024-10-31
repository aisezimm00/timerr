import React, { useState, useEffect } from 'react'

const Stopwatch = () => {
  const [sec, setSec] = useState(0)
  const [active, setActive] = useState(false)
  const [history, setHistory] = useState([])

  useEffect(() => {
    if (!active) return
    const interval = setInterval(() => setSec((s) => s + 1), 1000)
    return () => clearInterval(interval)
  }, [active])

  const start = () => setActive(true)
  const stop = () => {
    setActive(false)
    setHistory([...history, sec])
  }
  const reset = () => {
    setActive(false)
    setSec(0)
  }

  return (
    <div>
      <h1>Секундомер</h1>
      <h2>{sec} сек</h2>
      <button onClick={start}>Старт</button>
      <button onClick={stop}>Стоп</button>
      <button onClick={reset}>Сброс</button>
      <h3>Последние результаты</h3>
      <ul>
        {history.map((time, i) => (
          <li key={i}>{time} сек</li>
        ))}
      </ul>
    </div>
  )
}

export default Stopwatch



