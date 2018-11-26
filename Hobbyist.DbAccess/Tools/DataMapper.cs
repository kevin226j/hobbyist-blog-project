using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Hobbyist.DbAccess.Tools
{

    public class DataMapper<T> where T : class
    {
        private static readonly DataMapper<T> _instance = new DataMapper<T>();

        PropertyInfo[] properties;

        private DataMapper()
        {
            properties = typeof(T).GetProperties();
        }
        static DataMapper() { }

        public static DataMapper<T> Instance { get { return _instance; } }

        public T MapToObject(IDataReader reader)
        {
            IEnumerable<string> columns = reader.GetSchemaTable().Rows.Cast<DataRow>().Select(c => c["ColumnName"].ToString().ToLower()).ToList();

            T obj = Activator.CreateInstance<T>();

            foreach (PropertyInfo pinfo in properties)
            {
                if (columns.Contains(pinfo.Name.ToLower()))
                {
                    if (reader[pinfo.Name] != DBNull.Value) //only if DB returns null. 
                    {
                        if (reader[pinfo.Name].GetType() == typeof(decimal))
                        {
                            pinfo.SetValue(obj, reader.GetDouble(pinfo.Name));
                        }
                        else
                        {
                            pinfo.SetValue(obj, (reader.GetValue(reader.GetOrdinal(pinfo.Name)) ?? null), null);
                        }
                    }
                }
            }


            return obj;
        }
    }

    public static class DataHelper
    {
        //extensions
        public static double GetDouble(this IDataReader reader, string columName)
        {
            double dbl = 0;
            double.TryParse(reader[columName].ToString(), out dbl);
            return dbl;
        }

        public static double GetDouble(this IDataReader reader, int columnIndex)
        {
            double dbl = 0;
            double.TryParse(reader[columnIndex].ToString(), out dbl);
            return dbl;
        }

        public static T GetParmValue<T>(this IDbDataParameter[] dbParams, string paramname)
        {
            foreach (IDataParameter param in dbParams)
            {
                if (param.ParameterName.ToLower() == paramname.ToLower())
                {
                    return (T)Convert.ChangeType(param.Value, typeof(T));
                }
            }
            return default(T);
        }

        /*
         * (parameters => {
         *      id = parameters.GetParmValue<int>("@Id"); //for inserts
         * })
         */
    }

}
