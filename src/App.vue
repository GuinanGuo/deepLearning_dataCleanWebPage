<!-- ——————————————————————————————————————————主元素—————————————————————————————————————— -->
<template>
  <!-- —————————最上面的文字部分————— -->
  <div class="text">
    <!-- 标题 -->
    <div class="title-text">
      <h2>清洗任务管理</h2>
    </div>
    <div class="title-text1">
      您可以使用平台提供的数据清洗功能对图像数据集和文本数据集进行清洗。可以对数据集中的图片进行去模糊、去近似、旋转、镜像等多种基础清洗服务，
      以及过滤无人脸图片、过滤无人体图片等高级清洗服务。同时对文本数据进行去emoji，去url和繁体转简体的操作。完成数据清洗后，可提升数据质量，
      方便进行下一步的数据标注等操作。
    </div>
    <div class="title-text1">
      1、为保证您的清洗任务顺利运行，如果进行图像数据集的清洗，请确保清洗前数据版本中图片个数少于 50000 张，如您有大规模数据清洗需求，
      建议通过拆分数据集完成。 注:文本数据集无数据量的限制。
    </div>
    <div class="title-text1">
      2、在图像数据集处理时，不同的数据量级会影响您的任务时长，请参考 任务时长预估表。
    </div>
  </div>

  <div class="createTask">
    <el-button type="primary" @click="toPage">新建清洗任务</el-button>
  </div>
  <!-- ——————————表格部分—————————— -->
  <div class="table-box">
    <el-table :data="tableData" style="width: 200%" max-height="750" border>
      <el-table-column prop="id" label="任务序号" width="120" />
      <el-table-column prop="type" label="清洗类型" width="120" />
      <el-table-column prop="method" label="清洗方式" width="120" />
      <el-table-column prop="startTime" label="开始时间" width="120" />
      <el-table-column prop="beforeDataset" label="清洗前数据集" width="280" @click="beforeClean" />
      <el-table-column prop="afterDataset" label="清洗后数据集" width="280" @click="afterClean" />
      <el-table-column prop="status" label="清洗状态" width="120" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="lookContent(scope.$index)">
            查看任务详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- ———————————————分页———————————————— -->
    <div class="demo-pagination-block">
      <el-pagination v-model:currentPage="currentPage1" v-model:page-size="pageSize1" :page-sizes="[10, 20, 30]"
        layout="sizes, prev, pager, next" :total="tableData.length" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
  </div>

  <!-- ———————弹窗（查看任务详情）—————————— -->
  <el-dialog v-model="dialogTableVisible" title="查看任务详情">
    <el-table :data="gridData">
      <el-table-column property="startTime" label="开始时间" width="150" />
      <el-table-column property="num" label="提交数量" width="200" />
      <el-table-column property="cleanType" label="清洗方式" width="150" />
      <el-table-column property="result" label="清洗结果" width="150" />
      <el-table-column property="finishTime" label="完成时间" />
    </el-table>
  </el-dialog>
</template>


<script setup>
// ——————————————————————————————————————数据——————————————————————————————————————————————
import { reactive, ref } from "vue"
let num = $ref(15)
let currentPage1 = $ref(1)
let pageSize1 = $ref(10)
let dialogTableVisible = $ref(false)
let tableData = $ref([
  {
    id: '1',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '2',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '3',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '4',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '5',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '6',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '7',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '8',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '9',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '10',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '11',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '12',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '13',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '14',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
  {
    id: '15',
    type: '通用清洗',
    method: '去模糊',
    startTime: '2016-05-01',
    beforeDataset: '划痕V1',
    afterDataset: '划痕V2',
    status: '清洗完成',
  },
])
let gridData = $ref([
  {
    startTime: '2016-05-02 11:07:39',
    num: '7张图片',
    cleanType: '保留清晰度',
    result: '已经保存0张清洗后的图片',
    finishTime: '2016-05-02 11:17:39',
  },
])
// ——————————————————————————————————————方法——————————————————————————————————————————————
const lookContent = () => {
  dialogTableVisible = true
  console.log();
}
</script>


<!-- ————————————————————————————————————风格———————————————————————————————————————————— -->
<style scoped>
.demo-pagination-block {
  margin-top: 10px;
}

.table-box {
  margin-bottom: 200px;
}

.createTask {
  display: flex;
  margin-bottom: 30px;
  margin-top: 70px;
}

.title-text {
  display: flex;
  margin-bottom: 10px;
}

.title-text1 {
  display: flex;
  justify-content: left;
  
  font-size: 15px;
  font-weight: 200;
  text-align: left;
}
</style>
