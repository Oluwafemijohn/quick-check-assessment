import {
  enablePromise,
  openDatabase,
  ResultSet,
  SQLiteDatabase,
  Transaction,
} from 'react-native-sqlite-storage';
import {ILogin} from '../types/Type';
// import SQLite from 'react-native-sqlite-storage';

const tableName = 'userMy';
enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase(
    {
      name: 'user-data.db',
      location: 'default',
      createFromLocation: '~SQLite.db',
    },
    () => {
      console.log('DB Connected');
    },
    err => {
      console.log('DB Connection Error', err);
    },
  );
};

export const createTable = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    password TEXT
    )`;
  const query2 = `CREATE TABLE ${tableName} (
          id INT NOT NULL PRIMARY KEY,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL,
         )`;
  db.transaction(tx => {
    tx.executeSql(
      query,
      [],
      () => {
        console.log('Create Table Success');
      },
      err => {
        console.log('Create Table Error', err);
      },
    );
  });
};

export const getUser = async (db: SQLiteDatabase): Promise<ILogin[]> => {
  try {
    const userItems: ILogin[] = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`, []);
    // console.log('results', results[0].rows.item(0));

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        userItems.push(result.rows.item(index));
      }
    });
    return userItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get User !!!');
  }
};

export const saveUser = async (db: SQLiteDatabase, userItems: ILogin) => {
  // const insertQuery = `INSERT INTO ${tableName} (id, email, password) VALUES(1, email, password)`;
  const insertQuery = `INSERT OR REPLACE INTO ${tableName} (id, email, password) values(
    ${userItems.id}, 
    '${userItems.email}', 
    '${userItems.password}'
    )`;

  await db
    .transaction(async tx => {
      await tx
        .executeSql(insertQuery, [])
        .then(([results]) => {
          console.log('executeSql Results', results);
        })
        .catch(error => {
          console.log('executeSql Error', error);
        });
    })
    .then(() => {
      console.log('Transaction complete');
    })
    .catch(error => {
      console.log('Transaction error', error);
    });
};

export const updateUser = async (db: SQLiteDatabase, userItems: ILogin) => {
  const updateQuery = `UPDATE ${tableName} SET email = '${userItems.email}', password = '${userItems.password}' WHERE id = ${userItems.id};`;

  return db.executeSql(updateQuery);
};

export const deleteUser = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `DROP TABLE IF EXISTS ${tableName}`;

  await db.executeSql(
    query,
    [],
    (transaction: Transaction, resultSet: ResultSet) => {
      console.log('Table Deleted' + resultSet);
    },
    (transaction, err) => {
      console.log('Table Delete Error' + err);
    },
  );
};
