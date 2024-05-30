// import mongoose from 'mongoose';


// const DBConnection = async () => {
//     const MONODB_URI = `mongodb://Pratyush_ranjan:P@ratyushranjan1@ac-vgd0ta7-shard-00-00.205mtxs.mongodb.net:27017,ac-vgd0ta7-shard-00-01.205mtxs.mongodb.net:27017,ac-vgd0ta7-shard-00-02.205mtxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-81iulb-shard-0&authSource=admin&retryWrites=true&w=majority`;
//     try {
//        await mongoose.connect(MONODB_URI,{ useNewUrlParser: true});
//         console.log('Database connected successfully');
//     }catch (error) {
//         console.error('Error while connecting with the database',error.message);
//     }
// }

// export default DBConnection;

import mongoose from 'mongoose';

const DBConnection = async () => {
  const MONGODB_URI = 'mongodb://Pratyush_ranjan:P%40ratyushranjan1@ac-vgd0ta7-shard-00-00.205mtxs.mongodb.net:27017,ac-vgd0ta7-shard-00-01.205mtxs.mongodb.net:27017,ac-vgd0ta7-shard-00-02.205mtxs.mongodb.net:27017/?ssl=true&replicaSet=atlas-81iulb-shard-0&authSource=admin&retryWrites=true&w=majority';

  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error while connecting with the database', error.message);
  }
};

export default DBConnection;
