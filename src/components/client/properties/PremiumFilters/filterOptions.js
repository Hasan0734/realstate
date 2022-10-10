export const filterOptions = [
    {
      id: 1,
      name: "Floor No",
      inputName: "floorNo",
      options: [
        { id: 14, opName: "Basement", value: '-1' },
        { id: 15, opName: "Ground", value: '0' },
        { id: 16, opName: "1 ", value: 1 },
        { id: 17, opName: "2", value: 2 },
        { id: 18, opName: "3", value: 3 },
        { id: 19, opName: "4", value: 4 },
      ],
    },
    {
      id: 2,
      name: "Facing",
      inputName: "facing",
      options: [
        { id: 20, opName: "East", value: 'East' },
        { id: 21, opName: "North", value: 'North' },
        { id: 22, opName: "South", value: "South"},
        { id: 23, opName: "West", value: "West" },
        { id: 24, opName: "North-East", value: "North-East" },
        { id: 25, opName: "North-West", value: "North-West" },
        { id: 26, opName: "South-West", value: "North-West" },
        { id: 27, opName: "South-West", value: "North-West" },
      ],
    },
    {
      id: 3,
      name: "Non-veg",
      inputName: "vegPermission",
      options: [
        { id:28, opName: "Allowed", value: '1' },
        { id: 29, opName: "Not allowed", value: '0' },
      ],
    },
    {
      id: 4,
      name: "Pets",
      inputName: "petsPermission",
      options: [
        { id:30, opName: "Allowed", value: '1' },
        { id: 31, opName: "Not allowed", value: '0' },
      ],
    },
]