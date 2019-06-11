<template>
  <div class="container-fluid">
    <div class="col-sm-10 col-sm-offset-1" style="margin-top:50px;">
      <div class="panel panel-default">
        <div class="panel-heading">搜索</div>
        <div class="panel-body">
          <form role="form" class="form-inline">
            <div class="form-group">
              <label for="name">名称</label>
              <input type="text" class="form-control" id="name" placeholder="请输入名称">
            </div>

            <div class="form-group">
              <button type="submit" class="btn btn-default">开始搜索</button>
            </div>
          </form>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>编号</th>
              <th>图标</th>
              <th>名称</th>
              <th>价格</th>
              <th>邮费</th>

              <th class="text-center">操作</th>
            </tr>
          </thead>
          <tbody>
            
            <tr v-for="(item,index) in results" :key="item.id">
              <td>{{index+1}}</td>
              <td>
                <img :src="'/api'+item.pic" style="width:30px;" class="img-circle">
              </td>
              <td>{{item.title}}</td>
              <td>{{item.price}}</td>
              <td>{{item.fee}}</td>
          
              <td class="text-center">
                <a @click="update(item._id)" class="btn btn-success">修改</a>
                <a @click="deleted(item._id)" class="btn btn-danger">删除</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "list",
        created() {
            this.init();

        },
        data() {
            return {
                results: ""
            }
        },
        methods: {
            init() {
                this.$axios.get('/api/add/list').then(res => {
                    console.log(res.data)
                    this.results = res.data.results;
                })

            },
            update(id) {
                this.$router.push({
                    name: 'update',
                    params: {
                        id
                    }
                })
            },
            deleted(id) {
                this.$axios.get('/api/product/delete/' + id).then(res => {
                    console.log(res.data)
                    this.init();
                })

            }
        }
    };
</script>