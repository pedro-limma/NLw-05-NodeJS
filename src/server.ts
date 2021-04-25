import { http } from "./http";
import "./websocket/client";

//subindo servidor tanto do express e do WS
http.listen(3333, () => console.log('Server is running on port 3333'));

