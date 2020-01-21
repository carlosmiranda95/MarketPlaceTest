import React from "react";

import { CardsCategory } from "../shared/card/CustomCard";
import imgCapacitacion from "../../assets/img/capacitation.jpg";
import imgProyecto from "../../assets/img/proyect.JPG";
import imgKalomai from "../../assets/img/kalomai.jpg";
import style from "../../assets/style/components/category.module.css";

export default function CategoryList() {
  return (
    <div className={style.container}>
      <CardsCategory
        title="PROYECTOS"
        text="Conoce nuestros proyectos."
        image={imgProyecto}
        direction="/Product"
        visible={true}
      />
      <CardsCategory
        title="MEMBRESÍAS"
        text="Conoce nuestras membresías."
        image={imgKalomai}
        direction="/proyectWorldList"
        visible={true}
      />
      <CardsCategory
        title="CAPACITACIÓN"
        text="Accede a nuestras capacitaciones."
        image={imgCapacitacion}
        direction="/capacitacionList"
        visible={true}
      />
    </div>
  );
}
