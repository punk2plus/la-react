import React from "react"
import { connect } from "react-redux"
import { RootState } from "../../redux/store"
import MainLayout from "../../layouts/mainLayout"

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.pageC.loading,
    error: state.pageC.error,
    title: state.pageC.title,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    giveMeData: () => {},
  }
}

type PropsType = WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class PageCComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.giveMeData()
  }

  render() {
    const { title } = this.props
    return (
      <MainLayout>
        <div>标题</div>
        <div>{title}</div>
      </MainLayout>
    )
  }
}

const PageC = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(PageCComponent))

export default PageC
