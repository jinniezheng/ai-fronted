<!--
 * @Author: jinxin
 * @LastEditTime: 2023-07-21 20:12:48
 * @FilePath:
 * @Description:
-->
<script setup lang='ts'>
import { NButton } from 'naive-ui'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import {computed, defineAsyncComponent, onUpdated, ref, reactive, onMounted} from "vue";
import {useUserStore} from "@/store";
import { getChatUserLimit } from '@/api/recharge'
const { isMobile } = useBasicLayout()
const showTime = ref(false)
const BuyTime = defineAsyncComponent(() => import('@/components/Recharge/BuyTime.vue'))
const showAmount = ref(false)
const BuyAmount = defineAsyncComponent(() => import('@/components/Recharge/BuyAmount.vue'))

const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
/**
 * @description: 提交对话框中的内容
 * @return {*}
 */

let chatUserLimit = ref({
	limitAmout:String,
	limitTime:String
})

onMounted( async ()=> {
	const res = await getChatUserLimit(userInfo.value.id)
	chatUserLimit.value = res.data
})


</script>

<template>
  <div class="p-4 space-y-5 min-h-[200px]">
    <div class="space-y-6">
      <div
        class="flex items-center h-12"
        :class="isMobile && 'items-start'"
      >
        <span class="flex-shrink-0 w-[80px]">{{ $t('setting.expirationTime') }}</span>
				<div class="flex flex-wrap w-[180px] justify-center items-center gap-7">
					{{ chatUserLimit.limitTime }}
				</div>
        <div class="flex flex-wrap">
          <NButton strong secondary round  type="info" size="small" @click="showTime = true">
            {{ $t('购买时间') }}
          </NButton>
        </div>
				<div class="flex flex-wrap w-[200px] text-red-500 pl-4">
					*购买时间不限次数
				</div>
      </div>
      <div class="flex items-center h-12">
        <span class="flex-shrink-0 w-[80px]">{{ $t('setting.availableAmount') }}</span>
				<div class="flex flex-wrap w-[180px] justify-center items-center gap-7">
					{{ chatUserLimit.limitAmout }} 次
				</div>
				<div class="flex flex-wrap">
					<NButton strong secondary round  type="info" size="small" @click="showAmount=true">
						{{ $t('购买次数') }}
					</NButton>
				</div>
      </div>
    </div>
		<BuyTime v-if="showTime" v-model:visible="showTime" />
		<BuyAmount v-if="showAmount" v-model:visible="showAmount" />
  </div>
</template>
