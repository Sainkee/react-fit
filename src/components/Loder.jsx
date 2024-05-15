import mag from "../assets/mag.gif";
export default function Loder() {
  return (
    <div className="text-center">
      <span className="text-center flex justify-center">
        <img className="h-[100px] w-[100px] my-5" src={mag} alt="search icon" />
      </span>
      <h2 className="text-red-600 mb-10  text-lg font-semibold">
        If it takes long time, please refresh the page or Try something else
      </h2>
    </div>
  );
}
