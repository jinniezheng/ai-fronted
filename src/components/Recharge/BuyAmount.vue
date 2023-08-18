<!--
 * @Author: jinxin
 * @LastEditTime: 2023-07-17 21:32:06
 * @FilePath: \ai-fronted\src\components\Recharge\BuyAmount.vue
 * @Description: 购买次数
-->
<script setup lang='ts'>
import {computed, defineAsyncComponent, ref} from 'vue'
import { NModal,NSpace,NCard,NButton } from 'naive-ui'
import {SvgIcon} from "@/components";

interface Props {
  visible: boolean
}

interface Emit {
  (e: 'update:visible', visible: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const showAmount = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emit('update:visible', visible)
  },
})
const showCode = ref(false)
const set = ref(0)
const PaymentCode = defineAsyncComponent(() => import('@/components/Recharge/PaymentCode.vue'))
</script>

<template>
  <NModal v-model:show="showAmount" :auto-focus="false" preset="card" style="width: 95%; max-width: 600px">
		<div>
			<NSpace justify="space-between" >
				<NCard embedded>
					<p class="text-center text-xl font-bold ">50<span class="text-xs font-normal"> 条</span></p>
					<p class="text-center text-xs font-normal">特价<span class="text-xl text-red-500">6.6</span>元</p>
					<p class="text-center"><s class="text-xs font-light">原价8元</s></p>
					<NButton @click="showCode = true; set = 4"><SvgIcon icon="ri:shopping-cart-fill" />立即下单</NButton>
				</NCard>
				<NCard embedded>
					<p class="text-center text-xl font-bold ">125<span class="text-xs font-normal"> 条</span></p>
					<p class="text-center text-xs font-normal">特价<span class="text-xl text-red-500">16.6</span>元</p>
					<p class="text-center"><s class="text-xs font-light">原价20元</s></p>
					<NButton  @click="showCode = true; set = 5"><SvgIcon icon="ri:shopping-cart-fill" />立即下单</NButton>
				</NCard>
				<NCard embedded>
					<p class="text-center text-xl font-bold ">1000<span class="text-xs font-normal"> 条</span></p>
					<p class="text-center text-xs font-normal">特价<span class="text-xl text-red-500">88</span>元</p>
					<p class="text-center"><s class="text-xs font-light">原价128元</s></p>
					<NButton  @click="showCode = true; set = 6"><SvgIcon icon="ri:shopping-cart-fill" />立即下单</NButton>
				</NCard>
			</NSpace>
		</div>
		<PaymentCode v-if="showCode" v-model:visible="showCode" v-model:set="set" />
  </NModal>
</template>
