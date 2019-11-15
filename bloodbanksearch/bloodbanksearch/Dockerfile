#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk-nanoserver-1709 AS build
WORKDIR /src
COPY ["bloodbanksearch/bloodbanksearch.csproj", "bloodbanksearch/"]
RUN dotnet restore "bloodbanksearch/bloodbanksearch.csproj"
COPY . .
WORKDIR "/src/bloodbanksearch"
RUN dotnet build "bloodbanksearch.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "bloodbanksearch.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "bloodbanksearch.dll"]