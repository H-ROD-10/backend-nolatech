import swaggerDocs from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0", // OAS version
    info: {
      title: "Nolatech API",
      version: "1.0.0", // Your API version
      description: "API Prueba Técnica",
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
    servers: [
      { url: "http://localhost:8000/api/v1" }, // Adjust base URL if needed
    ],
  },
  apis: ["src/modules/user/routes/user.router.js"], // Path to your route handler files
};

export const espec = swaggerDocs(options);
