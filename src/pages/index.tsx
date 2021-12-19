import React from "react";
import { Elevation } from "../components/elevation";
import { LayoutPage } from "../components/layout";
import { MapPage } from "../components/map";

export const Index = () => {
  return (
    <LayoutPage>
      <main className="flex column">
        <section className="none map">
          <MapPage />
        </section>
        <section className="auto elevation">
          <Elevation />
        </section>
      </main>
    </LayoutPage>
  );
};
