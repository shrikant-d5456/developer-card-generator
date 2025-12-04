'use client';
import { useState } from "react";
import { ProfileData, ThemeColors } from "../../types/data";
import CardPreview from "../components/features/card/CardPreview";
import Form from "../components/features/form/Form";
import ThemeSelector from "../components/features/form/ThemeSelector";

const Home = () => {
     const [data, setData] = useState<ProfileData>({
        name: "",
        role: "",
        email: "",
        linkedin: "",
      });
    
      const [themeColors, setThemeColors] = useState<ThemeColors>({
        color1: "#f5df9a",
        color2: "#6252c7",
        color3: "#4f94e1",
        direction: "to-tr",
      });
    
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-11/12 mx-auto "
        >
            <div>
                <Form data={data} setData={setData} />
                <ThemeSelector themeColors={themeColors} setThemeColors={setThemeColors} />
            </div>
            <div className="overflow-scroll hide-scrollbar float-end">
                <CardPreview data={data} themeColors={themeColors} />
            </div>
        </section>
    )
}

export default Home
