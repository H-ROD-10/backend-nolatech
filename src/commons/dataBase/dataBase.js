import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_CLOUD)
    .then((con) =>
      console.log(`Database running width HOST: ${con.connection.host} `)
    )
    .catch((err) => console.log(err));
};

export default connectDatabase;
