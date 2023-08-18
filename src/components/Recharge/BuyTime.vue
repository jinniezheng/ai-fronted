<!--
 * @Author: jinxin
 * @LastEditTime: 2023-07-17 21:32:06
 * @FilePath: \ai-fronted\src\components\Recharge\BuyTime.vue
 * @Description: 购买时间
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

const showTime = computed({
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
	<NModal v-model:show="showTime" :auto-focus="false" preset="card" style="width: 95%; max-width: 600px">
		<div>
			<NSpace justify="space-between" >
				<NCard embedded>
					<p class="text-center text-xl font-bold ">1<span class="text-xs font-normal"> 个月</span></p>
					<p class="text-center text-xs font-normal">特价<span class="text-xl text-red-500">25</span>元</p>
					<p class="text-center"><s class="text-xs font-light">原价50元</s></p>
					<NButton  @click="showCode = true; set = 1"><SvgIcon icon="ri:shopping-cart-fill" />立即下单</NButton>
				</NCard>
				<NCard embedded>
					<p class="text-center text-xl font-bold ">6<span class="text-xs font-normal"> 个月</span></p>
					<p class="text-center text-xs font-normal">特价<span class="text-xl text-red-500">140</span>元</p>
					<p class="text-center"><s class="text-xs font-light">原价300元</s></p>
					<NButton  @click="showCode = true; set = 2"><SvgIcon icon="ri:shopping-cart-fill" />立即下单</NButton>
				</NCard>
				<NCard embedded>
					<p class="text-center text-xl font-bold ">12<span class="text-xs font-normal"> 个月</span></p>
					<p class="text-center text-xs font-normal">特价<span class="text-xl text-red-500">280</span>元</p>
					<p class="text-center"><s class="text-xs font-light">原价600元</s></p>
					<NButton  @click="showCode = true; set = 3"><SvgIcon icon="ri:shopping-cart-fill" />立即下单</NButton>
				</NCard>
			</NSpace>
		</div>
		<PaymentCode v-if="showCode" v-model:visible="showCode" v-model:set="set" />
	</NModal>
</template>
