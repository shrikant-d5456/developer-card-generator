import React from 'react'
import { FiShuffle, FiCopy } from 'react-icons/fi'

const ThemeSelector = ({ themeColors, setThemeColors }: { themeColors: any; setThemeColors: any; }) => {
  const [bgcolor1, setBgColor1] = React.useState(themeColors.color1);
  const [bgcolor2, setBgColor2] = React.useState(themeColors.color2);
  const [bgcolor3, setBgColor3] = React.useState(themeColors.color3);
  const [direction, setDirection] = React.useState('to-tr');
  const [img, setImg] = React.useState(themeColors.image);
  const directions = [
    { value: 'to-r', label: 'To Right' },
    { value: 'to-l', label: 'To Left' },
    { value: 'to-t', label: 'To Top' },
    { value: 'to-b', label: 'To Bottom' },
    { value: 'to-br', label: 'To Bottom Right' },
    { value: 'to-bl', label: 'To Bottom Left' },
    { value: 'to-tr', label: 'To Top Right' },
    { value: 'to-tl', label: 'To Top Left' },
  ];

  const handleColorChange = (setter: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    updateThemeColors(e.target.value, setter === setBgColor1 ? 'color1' : setter === setBgColor2 ? 'color2' : setter === setImg ? 'image' : 'color3');
  };

  const updateThemeColors = (value: string, colorKey: string) => {
    setThemeColors({
      ...themeColors,
      [colorKey]: value,
    });
  };

  const handleShuffle = () => {
    const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const newColor1 = randomColor();
    const newColor2 = randomColor();
    const newColor3 = randomColor();

    setBgColor1(newColor1);
    setBgColor2(newColor2);
    setBgColor3(newColor3);

    setThemeColors({
      color1: newColor1,
      color2: newColor2,
      color3: newColor3,
    });
  };

  // Keep themeColors in sync when the individual color inputs change
  React.useEffect(() => {
    updateThemeColors(bgcolor1, 'color1');
    updateThemeColors(bgcolor2, 'color2');
    updateThemeColors(bgcolor3, 'color3');
  }, [bgcolor1, bgcolor2, bgcolor3]);

  // Keep themeColors.direction in sync when the select changes
  React.useEffect(() => {
    setThemeColors((prev: any) => ({ ...prev, direction }));
  }, [direction, setThemeColors]);

  return (
    <div className="px-6 pt-2 rounded-lg shadow-md">
      
      <div id='theme-imgselector' className="my-4">
        <h3 className="text-lg font-bold text-white mb-4">Background Theme image</h3>
        <div className=' flex justify-between items-center gap-4'>
          <input
            type="text"
            value={img}
            onChange={handleColorChange(setImg)}
            placeholder='paste image link with https:// format...'
            className=" w-full text-white py-2 px-4  text-sm border border-gray-800 rounded-lg mb-4 focus:outline-blue-900 focus:outline focus:outline-offset"
          />
        </div>
      </div>

      <div  className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Gradient Theme</h3>
        <div className="flex gap-2">
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-3 py-2 bg-linear-to-r from-blue-500 to-blue-500 text-gray-200 rounded-lg hover:bg-blue-600 transition-all"
          id='shuffle'
          >
            <FiShuffle size={16} />
            <span className="text-sm font-semibold">Shuffle</span>
          </button>

        </div>
      </div>

      {/* Direction Selector */}
      <div id="theme-selector" className='w-full grid lg:grid-cols-4 items-center gap-2'>
        <div className='flex justify-between items-center p-2 border border-gray-800 rounded-lg '>
          <label htmlFor="theme" className="sr-only">Theme Direction</label>
          <select
            id="theme"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full text-sm text-gray-200 bg-black outline-none"
          >
            {directions.map(dir => (
              <option key={dir.value} value={dir.value}>{dir.label}</option>
            ))}
          </select>
        </div>

        {/* From Color */}
        <label className=" text-white hover:bg-blue-500 transition-all flex w-full justify-between items-center gap-3 overflow-hidden py-2 px-4 rounded-lg border border-gray-800 cursor-pointer ">
          <span className="text-sm ">From</span>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={bgcolor1}
              onChange={handleColorChange(setBgColor1)}
              className="w-6 h-6 cursor-pointer"
            />
            <span className="text-sm font-mono">{bgcolor1}</span>
          </div>
        </label>

        {/* Via Color */}
        <label className=" text-white hover:bg-blue-500 transition-all flex w-full justify-between items-center gap-3 overflow-hidden py-2 px-4 rounded-lg border border-gray-800 cursor-pointer ">
          <span className="text-sm ">Via</span>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={bgcolor2}
              onChange={handleColorChange(setBgColor2)}
              className="w-6 h-6 cursor-pointer"
            />
            <span className="text-sm font-mono">{bgcolor2}</span>
          </div>
        </label>



        {/* To Color */}
        <label className=" text-white hover:bg-blue-500 transition-all flex w-full justify-between items-center gap-3 overflow-hidden py-2 px-4 rounded-lg border border-gray-800 cursor-pointer ">
          <span className="text-sm ">To</span>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={bgcolor3}
              onChange={handleColorChange(setBgColor3)}
              className="w-6 h-6 cursor-pointer rounded-full"
            />
            <span className="text-sm font-mono">{bgcolor3}</span>
          </div>
        </label>
      </div>



    </div>
  )
}

export default ThemeSelector
