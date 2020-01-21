FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM node:10.16.0 as build-node
WORKDIR /ClientApp
COPY marketplace/ClientApp/package.json .
COPY marketplace/ClientApp/package-lock.json .
RUN npm install
COPY marketplace/ClientApp/ . 
RUN npm run build

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
ENV BuildingDocker true
WORKDIR /src
COPY ["marketplace/marketplace.csproj", "marketplace/"]
RUN dotnet restore "marketplace/marketplace.csproj"
COPY . .
WORKDIR "/src/marketplace"
RUN dotnet build "marketplace.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "marketplace.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY --from=build-node /ClientApp/build ./ClientApp/build
ENTRYPOINT ["dotnet", "marketplace.dll"]