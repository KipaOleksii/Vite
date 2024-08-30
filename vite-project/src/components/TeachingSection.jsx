import WayToLearn from "./WayToTeach"
import { ways } from "../data";

export default function TeachingSection() {
return (
    <section>
    <h3>Наш подход к обучению</h3>
    <ul>

      {ways.map((way) => (
        <WayToLearn key={way.title} {...way} />
      ))}
    
    </ul>
  </section>
)
}