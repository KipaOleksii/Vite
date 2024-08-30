import Button from "./components/Button/Button";
import { useState } from "react";

function StateVsRef() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h3>Значение ввода: {value}</h3>
      <input type="text" onChange={(event) => setValue(event.target.value)} className="control" />
    </div>
  );
}

export default function FeedBackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  const [hasError, setHasError] = useState(false);

  function handleChangeName(e) {
    setName(e.target.value);
    setHasError(e.target.value.trim().length === 0);
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          className="control"
          type="text"
          id="name"
          value={name}
          onChange={handleChangeName}
          style={{ border: hasError ? "1px solid red" : null }}
        />
        <br />

        <label htmlFor="reason">Причина обращения</label>
        <select
          className="control"
          id="reason"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button disabled={hasError}>Отправить</Button>
      </form>
      <StateVsRef />
      {/* <pre>
    Name: {name}
    <br />
    Reason: {reason}
</pre> */}
    </section>
  );
}
