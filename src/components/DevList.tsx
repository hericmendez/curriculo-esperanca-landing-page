import React, { useEffect, useRef, useState } from "react";
import DevCard from "./DevCard";
import axios from "axios";
import { ClipLoader } from "react-spinners"; //
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
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedStack, setSelectedStack] = useState<string>("");

  const ITEMS_PER_PAGE = 12;
  const paginatedDevs = filteredDevs.slice(0, page * ITEMS_PER_PAGE);
  const observer = useRef<IntersectionObserver | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  function isValidUrl(str: string): boolean {
    try {
      const url = new URL(str.startsWith("http") ? str : "https://" + str);
      return !!url.hostname;
    } catch {
      return false;
    }
  }

  function parseStacks(rawStack: string): string[] {
    return rawStack
      .replace(/\|/g, ",")
      .replace(/[/;\n]/g, ",")
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }
  useEffect(() => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        paginatedDevs.length < filteredDevs.length
      ) {
        setPage((prev) => prev + 1);
      }
    });

    if (loaderRef.current) {
      observer.current.observe(loaderRef.current);
    }

    return () => observer.current?.disconnect();
  }, [loading, paginatedDevs.length, filteredDevs.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNSM5yQk7RmbpMH6YGajp4iYmHaRh6nV17ugFYuobtb3y1ZPLZjkouP7BGGpe37K-W33jLd3wkMQme/pub?gid=1211938411&single=true&output=csv"
        );

        const csv = response.data;
        const [headerLine, ...lines] = csv.trim().split("\n");
        const headers = headerLine.split(",");

        const parsed: DevData[] = lines.map((line) => {
          const values = line.split(",");
          const row: any = {};

          headers.forEach((header, i) => {
            row[header.trim().toLowerCase()] = values[i]?.trim();
          });

          const rawStack = row["stacks"] || "";
          const stacksArray = parseStacks(rawStack);

          return {
            name: row["nome"] || "",
            linkedin: row["linkedin"] || "",
            github: row["github"] || "",
            portfolio: isValidUrl(row["portifólio"]) ? row["portifólio"] : "",
            area: row["área de atuação"] || "",
            level: row["nível"] || "",
            stack: rawStack,
            stacksArray,
          };
        });

        setDevs(parsed);
        setFilteredDevs(parsed);

        const uniqueAreas = Array.from(
          new Set(parsed.map((dev) => dev.area))
        ).filter(Boolean);
        const allStacks = Array.from(
          new Set(parsed.flatMap((dev) => dev.stacksArray))
        ).sort();

        setAreas(uniqueAreas);
        setStacks(allStacks);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Erro ao carregar desenvolvedores.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = devs;
    if (selectedArea) {
      filtered = filtered.filter((dev) => dev.area === selectedArea);
    }
    if (selectedStack) {
      filtered = filtered.filter((dev) =>
        dev.stacksArray.includes(selectedStack)
      );
    }
    if (searchTerm) {
      filtered = filtered.filter((dev) =>
        dev.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredDevs(filtered);
  }, [selectedArea, selectedStack, searchTerm, devs]);

  useEffect(() => {
    let filtered = devs;
    if (selectedArea) {
      filtered = filtered.filter((dev) => dev.area === selectedArea);
    }
    if (selectedStack) {
      filtered = filtered.filter((dev) =>
        dev.stacksArray.includes(selectedStack)
      );
    }
    setFilteredDevs(filtered);
    setPage(1);
  }, [selectedArea, selectedStack, devs]);

  return (
    <div className="p-4 flex flex-col items-center text-center">
      <p className="text-2xl text-gray-700 dark:text-gray-100 mb-0">
        Conheça nossos desenvolvedores talentosos e suas stacks! <br />
        {devs?.length} devinhos incríveis já fazem parte do nosso hall da fama!{" "}
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6"></p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-0">
        Se você é um desenvolvedor e quer fazer parte do nosso banco de
        talentos,{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfl9b0j4k2Z3f8Y5X6g7z5v8c4e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8e5f8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 dark:text-purple-400 underline"
        >
          preencha nosso formulário
        </a>
        .
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
        Se você é um recrutador e quer entrar em contato com algum
        desenvolvedor,{" "}
        <a
          href="https://wa.me/5511976013656"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 dark:text-purple-400 underline"
        >
          fale comigo no WhatsApp
        </a>
        .
      </p>
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Buscar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 dark:bg-gray-700 dark:text-white mb-4"
        />

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
      {error && (
        <div className="bg-red-100 text-red-800 px-4 py-3 rounded mb-6 max-w-xl">
          <strong className="font-bold">Erro:</strong> {error}
        </div>
      )}
      {loading && devs.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <ClipLoader size={50} color="#ec4899" />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mx-auto">
        {paginatedDevs.map((dev, index) => (
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
        <div
          ref={loaderRef}
          className="h-12 flex justify-center items-center mt-4"
        >
          {paginatedDevs.length < filteredDevs.length && (
            <ClipLoader size={30} color="#ec4899" />
          )}
        </div>
      </div>
    </div>
  );
};

export default DevList;
