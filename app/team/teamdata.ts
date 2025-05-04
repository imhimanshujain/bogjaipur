type TeamRole = {
    name: string
    image: string
  }
  
  const teamData: Record<string, TeamRole[]> = {
    Director: [
      {
        name: 'Amit Shah',
        image: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=1-9sfjwH',
      },
    ],
    'Co-Director': [
      {
        name: 'Neha Gupta',
        image: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=1-9sfjwH',
      },
      {
        name: 'Rahul Verma',
        image: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=1-9sfjwH',
      },
    ],
    Mentor: [
      {
        name: 'Dr. Ramesh Kulkarni',
        image: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=1-9sfjwH',
      },
      {
        name: 'Sneha Iyer',
        image: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_1_1200x1200/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=1-9sfjwH',
      },
    ],
  }
  
  export default teamData
  