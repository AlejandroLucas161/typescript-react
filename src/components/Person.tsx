import { ChangeEvent, FC, useState } from 'react';

export enum HairColor {
  Blonde = 'Your hair ir blonde, good for you',
  Brown = 'Cool hair color',
  Pink = 'Wow that is so cool',
}

interface Props {
  name: string;
  age: number;
  email: string;
  // getName: (name: string) => string;
  hairColor: HairColor;
}

export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  const [country, setCountry] = useState<string | null>('');

  type NameType = 'Lucas' | 'Alejandro'
  const nameForType: NameType = 'Lucas';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setCountry(e.target.value);

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{ }</h1>
      <h1>{age}</h1>

      <input placeholder='Write your country here...' onChange={handleChange} />
      <br />

      {country}

      <br />

      {hairColor}
    </div>
  );
}
