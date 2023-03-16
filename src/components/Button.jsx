export default function Button(props) {
  return (
    <div>
      <button className="bg-slate-700 text-white py-2 px-6 rounded md:ml-8 hover:bg-sky-700 duration-500">
        {props.children}
      </button>
    </div>
  );
}
