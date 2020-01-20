using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCardManager.Contracts
{
  public interface IDataProvider<T>
  {
    Task<T> GetAsync(Expression<Func<T, bool>> query, string[] includes = null);
    Task<List<T>> GetListAsync(Expression<Func<T, bool>> query = null, string[] includes = null);
    void Add(T entity);
    void Remove(T entity);
    Task<int> SaveAsync();
  }
}
