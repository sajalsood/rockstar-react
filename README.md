# Rockstar Music Library

Web app application for a rockstar music library to show song lyrics for 3 songs.

## Client (front-end)

- [React](https://reactjs.org/docs/getting-started.html)

## Service (back-end)

- [ASP.NET Core 5.0](https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/intro)

## How to run locally

1. [Download and install the .NET Core SDK](https://dotnet.microsoft.com/download)
2. Open a terminal such as **PowerShell**, **Command Prompt**, or **bash** and navigate to the `rockstar-react` folder where the `rockstar.csproj` is located.
3. Run the following `dotnet` commands:
    ```sh
    dotnet dev-certs https --trust
    dotnet build
    dotnet run
    ```
4. Open your browser to: `https://localhost:5001`.

## Folder Structure

### React Frontend

```
ClientApp/
  README.md
  node_modules/
  package.json
  public/
    images/
        <<static images>>
        <<static images>>
        <<static images>>
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

### Dotnet Backend

```
Controllers/
  SongController.cs
Models/
    SongModel.cs
Pages
Properties
.gitignore
Program.cs
Startup.cs
appsettings.Development.json
appsettings.json
rockstar.csproj
```
