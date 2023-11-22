"use client";

import Layout from "@/widgets/Layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
interface IPlace {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ITour {
    amount_of_people: number;
    date: string;
    description: string;
    id: number;
    image: string;
    name: string;
    place: number;
    price: number;
    rooms: number;
  }

export default function Place({ params }: { params: { id: number } }) {
  const [info, setInfo] = useState<IPlace[]>([]);
  const [tours, setTours] = useState<ITour[]>([]);

  useEffect(() => {
    axios
      .get<{ results: IPlace[] }>(
        `https://timkaqwerty.pythonanywhere.com/api/places/almaty?format=json`
      )
      .then((response) => {
        let result: Array<IPlace> = response.data.results;
        let afterFiltration = result.filter((item) => item.id == params.id);
        setInfo(afterFiltration);
        
      });
    axios
      .get<{ results: ITour[] }>(
        `https://timkaqwerty.pythonanywhere.com/api/tours_by_place/${params.id}`
      )
      .then((response) => {
        let result: Array<ITour> = response.data.results;
        setTours(result);
      });
  }, []);

  return (
    <main>
      <Layout>
        <div className="container">
            {info.length > 0 ? info[0].name : 'loading...'}
            <div>
                {tours.length > 0 ? tours.map((item, index) => {
                    return (
                        <div key={index}>{item.name}</div>
                    )
                }) : 'loading...'}
            </div>
        </div>
      </Layout>
    </main>
  );
}
