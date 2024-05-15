export default function Card({ item, ClickHandler, index }) {
  return (
    <>
      <div
        className="bg-gray-200 border rounded-lg cursor-pointer overflow-hidden shadow-lg"
        key={index}
        onClick={ClickHandler}
      >
        <img className="w-full h-auto" src={item.gifUrl} alt="exercise gif" />
        <div className="p-4">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-gray-700 px-3 py-1 rounded text-xs text-white">
              {item.bodyPart}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded text-xs text-white">
              {item.target}
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded text-xs text-white">
              {item.equipment}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-700">{item.description}</p>
        </div>
      </div>
    </>
  );
}
