import React from "react";

const Images = () => {
  return (
    <form class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="image" class="block mb-2 font-bold">
          Select an image:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/jpeg, image/jpg"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

export default Images;
