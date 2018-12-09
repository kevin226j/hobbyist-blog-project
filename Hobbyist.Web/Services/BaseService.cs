using Hobbyist.DbAccess.DbAdapter;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Hobbyist.Services
{
    public class BaseService
    {
        public DbAdapter Adapter
        {
            get
            {
                return new DbAdapter(new SqlCommand(),
                    new SqlConnection("Data Source=localhost\\sqlexpress;Initial Catalog=Hobbyist;Integrated Security=SSPI"));
            }
        }
    }
}