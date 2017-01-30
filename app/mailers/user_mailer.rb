class UserMailer < ApplicationMailer

  default from: 'notifications@example.com'

  def work_update(completed_doc)
    @completed_doc = completed_doc
    mail(to: ["vinod@vakilsearch.com","vignesh.suresh@vakilsearch.com"], subject: 'Daily Report')
  end
end
