using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular_NodeApp.Controllers
{
    public class EmployeesController : ApiController
    {
        public IEnumerable<EMPLOYEESTABLE> Get()
        {
            using (myDBConnections entities = new myDBConnections())
            {
                return entities.EMPLOYEESTABLE.ToList();
            }
        }

        public EMPLOYEESTABLE Get(int ID)
        {
            using (myDBConnections entities = new myDBConnections())
            {
                return entities.EMPLOYEESTABLE.FirstOrDefault(e => e.ID == ID);
            }
        }
    }
}
