using BetterDocs.DataStorage;
using BetterDocs.Models;
using Microsoft.AspNetCore.SignalR;

namespace BetterDocs.Hubs
{
    public class DocumentHub : Hub
    {
        public TextDocumentModel GetDocument(long id)
        {
            return DataManager.GetTextDocument(id);
        }
    }
}