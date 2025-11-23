import { useState } from "react";
import { ProfileData } from "../../../../types/data";
import { VscSend } from "react-icons/vsc";
import { toast } from "sonner";

interface FormProps {
  data: ProfileData;
  setData: React.Dispatch<React.SetStateAction<ProfileData>>;
}

export default function Form({ data, setData }: FormProps) {
  const [formData, setFormData] = useState<ProfileData>(data);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "portfolio" || name === "linkedin") {
      const cleaned = value.replace(/^https?:\/\//, "");
      setFormData((prev) => ({
        ...prev,
        [name]: cleaned,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.role || !formData.email || !formData.linkedin) {
      toast.info("Please fill in all required fields, developer!");
      return;
    }

    if (formData.email && !formData.email.includes("@")) {
      toast.info("Please enter a valid email");
      return;
    }
    if (formData.name.length > 40 || formData.role.length > 40) {
      toast.info("Name and role must be larg to the card size, please shorten them");
      return;
    }

    setData(formData);
    toast.info("Generating your developer card...");
    toast.success("Developer card generated successfully!");
  };

  return (
    <div id="profile-section" className="px-6 shadow rounded">
      <h2 className="text-lg font-bold mb-4 text-white">Enter Details</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name/@username"
          value={formData.name}
          className="w-full text-white bg-black/20 py-2 px-4  text-sm border border-gray-800 rounded-lg mb-4 focus:outline-blue-900 focus:outline focus:outline-offset"
          onChange={handleChange}
        />

        <div className=" lg:flex gap-4 ">
          <input
            type="text"
            name="email"
            placeholder="email address"
            value={formData.email}
            className=" w-full text-white bg-black/20 py-2 px-4  text-sm border border-gray-800 rounded-lg mb-4 focus:outline-blue-900 focus:outline focus:outline-offset"
            onChange={handleChange}
          />
          <input
            type="text"
            name="role"
            placeholder="role/title"
            value={formData.role}
            className=" w-full text-white py-2 px-4  text-sm border border-gray-800 rounded-lg mb-4 focus:outline-blue-900 focus:outline focus:outline-offset"
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="linkedin"
          placeholder="linkedin URL"
          value={formData.linkedin}
          className=" w-full text-white py-2 px-4  text-sm border border-gray-800 rounded-lg mb-4 focus:outline-blue-900 focus:outline focus:outline-offset"
          onChange={handleChange}
        />

        <input
          type="text"
          name="portfolio"
          placeholder="website URL (optional)"
          value={formData.portfolio}
          className=" w-full text-white py-2 px-4  text-sm border border-gray-800 rounded-lg mb-4 focus:outline-blue-900 focus:outline focus:outline-offset"
          onChange={handleChange}
        />

        <button
          type="submit"
          className=" w-full lg:w-fit flex items-center justify-center gap-2 px-3 py-2 bg-linear-to-r from-blue-500 to-blue-500 text-gray-200 rounded-lg hover:bg-blue-600 transition-all"
        >
          <span className="text-sm font-semibold">Let’s Generate Your Dev Card!</span>
          <VscSend size={18} className="-rotate-45  " />
        </button>
      </form>
    </div>
  );
}
