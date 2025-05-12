import React, { useEffect, useState } from 'react';
import DevCard from './DevCard';

type DevData = {
  name: string;
  area: string;
  stack: string;
  stacksArray: string[]; // nova propriedade normalizada
  github?: string;
  linkedin?: string;
  portfolio?: string | undefined;
};

const DevList: React.FC = () => {
  const [devs, setDevs] = useState<DevData[]>([]);
  const [filteredDevs, setFilteredDevs] = useState<DevData[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [stacks, setStacks] = useState<string[]>([]);
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [selectedStack, setSelectedStack] = useState<string>('');
  function isValidUrl(str: string): boolean {
    try {
      const url = new URL(str.startsWith('http') ? str : 'https://' + str);
      return !!url.hostname;
    } catch {
      return false;
    }
  }
  
  function parseStacks(rawStack: string): string[] {
    return rawStack
      .replace(/\|/g, ',')
      .replace(/[/;\n]/g, ',')
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQNSM5yQk7RmbpMH6YGajp4iYmHaRh6nV17ugFYuobtb3y1ZPLZjkouP7BGGpe37K-W33jLd3wkMQme/pub?gid=1211938411&single=true&output=csv'
    )
      .then((res) => res.text())
      .then((csv) => {
        const [headerLine, ...lines] = csv.trim().split('\n');
        const headers = headerLine.split(',');

        const parsed: DevData[] = lines.map((line) => {
          const values = line.split(',');
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const row: any = {};

          headers.forEach((header, i) => {
            row[header.trim().toLowerCase()] = values[i]?.trim();
          });

          const rawStack = row['stacks'] || '';
          const stacksArray = parseStacks(rawStack);

          return {
            name: row['nome'] || '',
            linkedin: row['linkedin'] || '',
            github: row['github'] || '',
            portfolio: isValidUrl(row['portifólio'])? row['portifólio'] : '',
            area: row['área de atuação'] || '',
            level: row['nível'] || '',
            stack: rawStack,
            stacksArray,
          };
        });

        setDevs(parsed);
        setFilteredDevs(parsed);

        const uniqueAreas = Array.from(new Set(parsed.map((dev) => dev.area))).filter(Boolean);
        const allStacks = Array.from(
          new Set(parsed.flatMap((dev) => dev.stacksArray))
        ).sort();

        setAreas(uniqueAreas);
        setStacks(allStacks);
      });
  }, []);

  useEffect(() => {
    let filtered = devs;
    if (selectedArea) {
      filtered = filtered.filter((dev) => dev.area === selectedArea);
    }
    if (selectedStack) {
      filtered = filtered.filter((dev) => dev.stacksArray.includes(selectedStack));
    }
    setFilteredDevs(filtered);
  }, [selectedArea, selectedStack, devs]);

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 mb-4">
        <select
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        >
          <option value="">Todas as Áreas</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
        <select
          value={selectedStack}
          onChange={(e) => setSelectedStack(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 dark:bg-gray-700 dark:text-white"
        >
          <option value="">Todas as Stacks</option>
          {stacks.map((stack) => (
            <option key={stack} value={stack}>
              {stack}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredDevs.map((dev, index) => (
          <DevCard
            key={index}
            name={dev.name}
            area={dev.area}
            stack={dev.stack}
            github={dev.github}
            linkedin={dev.linkedin}
            portfolio={dev.portfolio}
          />
        ))}
      </div>
    </div>
  );
};

export default DevList;
