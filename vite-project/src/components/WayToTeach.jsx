 export default function WayToLearn({title, description}) {
    return (
      <li>
        <p>
          <strong>{title}</strong>
          {description}
        </p>
      </li>
    );
  }