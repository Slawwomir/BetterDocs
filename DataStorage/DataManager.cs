using BetterDocs.Models;

namespace BetterDocs.DataStorage
{
    // Mocked data
    public static class DataManager
    {
        public static TextDocumentModel GetTextDocument(long id)
        {
            return new TextDocumentModel {Title = "Default", TextContent = "Some random text"};
        }
    }
}