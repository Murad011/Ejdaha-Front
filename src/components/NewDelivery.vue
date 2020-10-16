<template>
  <div class="division">
    <table class="table">
      <tr>
      <th v-for="head in tableHead" :key="head">
        {{head}}
      </th>
      </tr>
      <tr>
        <td v-for="data in tableData" :key="data">
          {{data}}
        </td>
        <td>
    
      <select name="couriers" id="courierSelection" >
        <option value="CoruierName" v-for="name in courierNames" :key="name">>
          {{name}}
        </option>
      </select>
   
        </td>
        <td>
          {{location}}
        </td>
      </tr>
    </table>
    
    <input class="searchBar" type="text" placeholder="search..."/>
    
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableHead:["Ad","Soyad","Sifarish","choose courier","Location"],
        tableData:["Customer Name","Customer Surname", "Ordered Food"],
        courierNames:["Name1","Name2","Name3"],
        location: "M.Ecemi mst."
      }
    }
}
</script>

<style scoped>
.division{
  text-align: center;
}

  .table{
    width: 100%;
  }

  .searchBar{
    width: 90%;
  }

  
</style>