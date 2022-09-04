export const UserCol = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: `user `,
    headerName: `user`,
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="" className="cellImg" />
          {params.row.userName}
        </div>
      );
    },
  },
  {
    field: `email `,
    headerName: `Email`,
    width: 230,
    renderCell: (params) => {
      return <div>{params.row.email}</div>;
    },
  },
  {
    field: `age `,
    headerName: `Age`,
    width: 170,
    renderCell: (params) => {
      return <div>{params.row.age}</div>;
    },
  },
  {
    field: `status `,
    headerName: `Status`,
    width: 190,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const UserRows = [
  {
    id: 1,
    userName: `smow `,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJietdKWcc9PoouP-8sR1vR6wqqjrVrxy5Z25ukc7cMUU-6oLJedGyWdlolQ21UNz07k&usqp=CAU`,
    email: `bhfjjn@gmail.com`,
    status: `pending`,
    age: 23,
  },
  {
    id: 2,
    userName: `David `,
    img: ``,
    email: `David4378@gmail.com`,
    status: `active`,
    age: 25,
  },
  {
    id: 3,
    userName: `Nathaniel `,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAk1MzSRGPAplc2bAMB3Ae-18TFhCf7_OgNg&usqp=CAU`,
    email: `Nathjoeetim@gmail.com`,
    status: `pending`,
    age: 26,
  },
  {
    id: 4,
    userName: `Samuel `,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAk1MzSRGPAplc2bAMB3Ae-18TFhCf7_OgNg&usqp=CAU`,
    email: `sammy34@yahoo.com`,
    status: `active`,
    age: 64,
  },
  {
    id: 5,
    userName: `John `,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1877n99Ny9PaUU_3N-YY4F6dQnCeUtYhPA&usqp=CAU`,
    email: `jonny@gmail.com`,
    status: `pending`,
    age: 11,
  },
  {
    id: 6,
    userName: `Daniel  `,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAk1MzSRGPAplc2bAMB3Ae-18TFhCf7_OgNg&usqp=CAU`,
    email: `Danny2022@gmail.com`,
    status: `active`,
    age: 64,
  },
  {
    id: 7,
    userName: `MaryAnn `,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1877n99Ny9PaUU_3N-YY4F6dQnCeUtYhPA&usqp=CAU`,
    email: `MarryAnn236@gmail.com`,
    status: `active`,
    age: 10,
  },
  {
    id: 8,
    userName: `Joeetim`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1877n99Ny9PaUU_3N-YY4F6dQnCeUtYhPA&usqp=CAU`,
    email: `joeetim@gmail.com`,
    status: `pending`,
    age: 30,
  },
];
