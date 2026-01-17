import React, { useState } from 'react';
import { Button } from '@repo/ui/button';


export default function Home() {
  const [display, setDisplay] = useState('0');
  const [pending, setPending] = useState(null);
  const [op, setOp] = useState(null);

  function inputDigit(d) {
    setDisplay(prev => (prev === '0' ? String(d) : prev + d));
  }

  function inputDot() {
    setDisplay(prev => (prev.includes('.') ? prev : prev + '.'));
  }

  function clear() {
    setDisplay('0');
    setPending(null);
    setOp(null);
  }

  function chooseOp(nextOp) {
    const value = parseFloat(display);

    if (pending == null) {
      setPending(value);
      setDisplay('0');
    } else if (op) {
      const result = compute(pending, value, op);
      setPending(result);
      setDisplay(String(result));
    }
    setOp(nextOp);
  }

  function compute(a, b, operator) {
    if (operator === '+') return a + b;
    if (operator === '-') return a - b;
    if (operator === '*') return a * b;
    if (operator === '/') return b === 0 ? 'Error' : a / b;
    return b;
  }

  function equals() {
    if (op == null || pending == null) return;
    const result = compute(pending, parseFloat(display), op);
    setDisplay(String(result));
    setPending(null);
    setOp(null);
  }

  return (
    <main className="calc-root">
      <div className="display">{display}</div>

      <div className="pad">
        <Button onClick={() => clear()}>C</Button>
        <Button onClick={() => chooseOp('/')}>/</Button>
        <Button onClick={() => chooseOp('*')}>*</Button>
        <Button onClick={() => chooseOp('-')}>-</Button>

        {[7, 8, 9].map(n => (
          <Button key={n} onClick={() => inputDigit(n)}>{n}</Button>
        ))}
        {[4, 5, 6].map(n => (
          <Button key={n} onClick={() => inputDigit(n)}>{n}</Button>
        ))}
        {[1, 2, 3].map(n => (
          <Button key={n} onClick={() => inputDigit(n)}>{n}</Button>
        ))}

        <Button onClick={() => inputDigit(0)}>0</Button>
        <Button onClick={inputDot}>.</Button>
        <Button onClick={equals}>=</Button>
        <Button onClick={() => chooseOp('+')}>+</Button>
      </div>

      <style jsx>{`
        .calc-root {
          max-width: 380px;
          margin: 48px auto;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }
        .display {
          font-size: 2rem;
          background: #f7f7f7;
          padding: 12px;
          border-radius: 6px;
          text-align: right;
          margin-bottom: 12px;
          min-height: 56px;
        }
        .pad {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
      `}</style>
    </main>
  );
}
