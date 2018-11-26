using System;
using System.Collections.Generic;
using System.Data;

namespace Hobbyist.DbAccess.DbAdapter
{
    public interface IDbAdapter
    {
        IDbCommand Cmd { get; }
        IDbConnection Conn { get; }

        T ExecuteDbScalar<T>(string storedProcedure, IDataParameter[] parameters = null);
        int ExecuteQuery(string storedProcedure, IDbDataParameter[] parameters, Action<IDbDataParameter[]> returnParameters = null);
        List<T> LoadObject<T>(string storedProcedure, IDataParameter[] parameters = null) where T : class;
    }
}