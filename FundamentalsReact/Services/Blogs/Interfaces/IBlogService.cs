using System.Collections.Generic;
using Hobbyist.Services.Blogs.Models;
using Hobbyist.Services.Blogs.Models.Requests;

namespace Hobbyist.Services.Blogs.Interfaces
{
    public interface IBlogService
    {
        int Delete(int id);
        List<Blog> GetAll();
        Blog GetById(int id);
        int Insert(BlogAddRequest model);
        int Update(BlogUpdateRequest model);
    }
}