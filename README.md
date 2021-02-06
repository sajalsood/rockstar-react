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

## Serving the data

The react application communicates with the dotnet server through an API Controller. The controller `SongController.cs` has two APIs:
1. HttpGet - `Song By Id`
2. HttpGet - `All Songs`

Both actions in the controller return a model data - `SongModel.cs`. 

```c#
public class SongModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Artist { get; set; }
    public string ImageUrl { get; set; }
    public string Lyrics { get; set; }
}
```

The lyrics are stored as Json Data which is served to react frontend and converted to HTML layout during the page rendering.

The name of the image is also served from the backend and an absolute path is contructed on nreact frontend. The absolute path corresponds to the static image which is located in the `public\images\****` folder.

